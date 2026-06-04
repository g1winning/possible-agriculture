#!/usr/bin/env bash
# ============================================================================
# Possible Agriculture — bulk download for biochar library PDFs
# ============================================================================
#
# Downloads every academic / industry PDF in the /library section of the
# website directly from its publisher. Run from anywhere:
#
#     bash ~/Desktop/Possible-Agriculture-Refresh/site/scripts/download-library-pdfs.sh
#
# Output: PDFs land in site/public/pdfs/library/, with the filenames the
# library content collection expects.
#
# Notes
# -----
#   * Some publishers (ScienceDirect/Elsevier, IOP, LRRD) block anonymous
#     curl requests no matter what headers we send. Those entries are
#     listed under "Open in browser" at the end — the script prints the URL
#     and you click through to download manually.
#   * Gray-literature entries (internal trials, presentations, brochures)
#     ship with the repo at site/public/pdfs/library/. They're not in this
#     script because they have no canonical public URL.
#   * Re-run any time to refresh PDFs; existing files >50KB are skipped.
# ============================================================================

set -u

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="${SCRIPT_DIR}/../public/pdfs/library"
mkdir -p "${DEST}"

UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

TOTAL=0; OK=0; FAIL=0; SKIPPED=0
FAILED_FILES=()

# fetch <filename> <url> [referer]
fetch() {
  local filename="$1"
  local url="$2"
  local referer="${3:-}"
  TOTAL=$((TOTAL + 1))
  local dest="${DEST}/${filename}"

  if [ -f "${dest}" ] && [ "$(stat -f%z "${dest}" 2>/dev/null || stat -c%s "${dest}" 2>/dev/null)" -gt 50000 ]; then
    echo "  • ${filename}  (already present)"
    SKIPPED=$((SKIPPED + 1))
    return
  fi

  echo "  ↓ ${filename}"
  local args=(-sL -A "${UA}" -H "Accept: application/pdf,*/*" -o "${dest}" --max-time 60)
  [ -n "${referer}" ] && args+=(-H "Referer: ${referer}")

  if curl "${args[@]}" "${url}"; then
    local size
    size=$(stat -f%z "${dest}" 2>/dev/null || stat -c%s "${dest}" 2>/dev/null)
    if [ "${size:-0}" -lt 50000 ] || ! head -c 4 "${dest}" | grep -q '^%PDF'; then
      echo "    ✗ blocked — open URL in browser to download manually"
      rm -f "${dest}"
      FAIL=$((FAIL + 1))
      FAILED_FILES+=("${filename}  ←  ${url}")
      return
    fi
    OK=$((OK + 1))
  else
    echo "    ✗ curl error"
    FAIL=$((FAIL + 1))
    FAILED_FILES+=("${filename}  ←  ${url}")
  fi
}

echo "Possible Agriculture — biochar library PDF download"
echo "Destination: ${DEST}"
echo ""

echo "Direct downloads (open access, publisher allows anonymous curl)"
echo "----------------------------------------------------------------"

# Springer Open / Springer Nature — Yu 2013 (IJEEE, open access)
fetch "yu-2013-water-holding.pdf" \
      "https://link.springer.com/content/pdf/10.1186/2251-6832-4-44.pdf" \
      "https://link.springer.com/article/10.1186/2251-6832-4-44"

# MDPI — Davis 2024 cultural burning + soil, open access CC-BY
fetch "davis-2024-cultural-burning-soil.pdf" \
      "https://mdpi-res.com/d_attachment/fire/fire-07-00075/article_deploy/fire-07-00075.pdf?version=1709212164" \
      "https://www.mdpi.com/2571-6255/7/3/75"

# PLOS ONE — Cornelissen 2016 Kon-Tiki
fetch "cornelissen-2016-kon-tiki-flame-curtain.pdf" \
      "https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0154617&type=printable" \
      "https://doi.org/10.1371/journal.pone.0154617"

# ANZBI — industry report (Webconsole asset CDN)
fetch "anzbi-2020-value-biochar-wood-vinegar.pdf" \
      "https://assets.cdn.thewebconsole.com/S3WEB10393/images/ANZBI-2020-A-Report-on-the-Value-of-Biochar-and-Wood-Vinegar-v-1.2.pdf" \
      "https://anzbig.org/"

# USGA — open guidance document
fetch "usga-2018-putting-green-recommendations.pdf" \
      "https://www.usga.org/content/dam/usga/pdf/2018/course-care/2018-USGA-Recommendations.pdf" \
      "https://www.usga.org/"

# InTech / IntechOpen — Fischer & Glaser 2012 compost-biochar synergisms (open access)
fetch "fischer-glaser-2012-compost-biochar-synergisms.pdf" \
      "https://www.intechopen.com/chapter/pdf-download/27163" \
      "https://www.intechopen.com/chapters/27163"

echo ""
echo "----------------------------------------------------------------"
echo "Summary: ${OK} downloaded · ${SKIPPED} already present · ${FAIL} failed (of ${TOTAL} attempted)"

if [ "${FAIL}" -gt 0 ]; then
  echo ""
  echo "These need to be downloaded manually (publisher blocks anonymous curl):"
  for f in "${FAILED_FILES[@]}"; do echo "  - ${f}"; done
  echo ""
  echo "Save each PDF into ${DEST} with the listed filename."
fi

echo ""
echo "Open in browser — publisher blocks anonymous curl entirely"
echo "----------------------------------------------------------------"
echo "These entries ship with the repo. To refresh them, open the URL in"
echo "a browser, save the PDF, and put it in:"
echo "  ${DEST}"
echo ""
echo "  leng-preston-cattle.pdf"
echo "     ← https://www.lrrd.org/lrrd24/11/leng24199.htm   (HTML article — print to PDF)"
echo ""
echo "  huang-2020-leaching.pdf"
echo "     ← https://iopscience.iop.org/article/10.1088/1755-1315/424/1/012015/pdf"
echo "  advances-biochar-nitrogen-phosphorus.pdf  (same filename used in library entry)"
echo ""
echo "  sormo-2021-pfas.pdf"
echo "     ← https://doi.org/10.1016/j.scitotenv.2020.144034"
echo "     ← alternative: https://www.researchgate.net/publication/347433034"
echo ""
echo "  silvani-2019-pfas-lead-antimony-remediation.pdf"
echo "     ← https://doi.org/10.1016/j.scitotenv.2019.133693"
echo ""
echo "  rajapaksha-2016-engineered-designer-biochar.pdf"
echo "     ← https://doi.org/10.1016/j.chemosphere.2016.01.043"
echo ""
echo "  joseph-2015-feeding-biochar-to-cows-pedosphere.pdf"
echo "     ← https://doi.org/10.1016/S1002-0160(15)30047-3"
echo ""
echo "  li-2025-viticulture-biochar-bacteria.pdf"
echo "     ← https://doi.org/10.1016/j.eti.2025.104070"
echo ""
echo "  joseph-2021-mechanisms.pdf  (not bundled with the library)"
echo "     ← https://doi.org/10.1111/gcbb.12885"
echo ""
echo "Gray-literature entries (bundled with the repo, no public URL)"
echo "----------------------------------------------------------------"
echo "  biochar-2x-soil-carbon.pdf, compost-biochar-ibi.pdf,"
echo "  compost-biochar-ibi-references.pdf, compost-biochar-lab-test.pdf,"
echo "  use-of-biochar-as-feed-supplements.pdf, use-of-biochar-in-animal-feeding.pdf,"
echo "  biochar-poultry-litter-composting.pdf, kelpie-wilson-shelterbelt-biochar.pdf,"
echo "  vaughn-bentgrass-biochar-compost-golf-greens.pdf,"
echo "  oasis-2020-vineyard-biochar-trial.pdf, dairy-rebbec.pdf"
