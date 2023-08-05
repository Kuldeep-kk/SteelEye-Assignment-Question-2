function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let highlightedHTML = htmlContent;
  
    for (const position of plainTextPositions) {
      const { start, end } = position;
      console.log(start);
      console.log(end);
      const startTag = '<mark>';
      const endTag = '</mark>';
  

      const startPosInHTML = highlightedHTML.indexOf(plainText.slice(start, end),start-1);
      const endPosInHTML = startPosInHTML + (end - start);

        highlightedHTML =
        highlightedHTML.slice(0, startPosInHTML) +
        startTag +
        highlightedHTML.slice(startPosInHTML, endPosInHTML) +
        endTag +
        highlightedHTML.slice(endPosInHTML);
    }
  
    return highlightedHTML;
  }

  module.exports = highlightHTMLContent;