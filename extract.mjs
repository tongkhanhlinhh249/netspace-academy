import { Project, SyntaxKind } from "ts-morph";
import fs from "fs";

const project = new Project();
project.addSourceFilesAtPaths("../src/app/**/*.tsx");

const uniqueStrings = new Set();

const isVietnamese = (str) => {
  // A simple heuristic for Vietnamese characters
  return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);
};

for (const sourceFile of project.getSourceFiles()) {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.JsxText)) {
      const text = node.getLiteralText().trim();
      if (text && isVietnamese(text)) {
        uniqueStrings.add(text);
      }
    } else if (node.isKind(SyntaxKind.StringLiteral)) {
      const parent = node.getParent();
      // Check if it's inside a JsxAttribute or other UI places (e.g. placeholder)
      if (
        parent &&
        (parent.isKind(SyntaxKind.JsxAttribute) ||
          parent.isKind(SyntaxKind.PropertyAssignment) ||
          parent.isKind(SyntaxKind.ArrayLiteralExpression))
      ) {
        const text = node.getLiteralValue().trim();
        if (text && isVietnamese(text)) {
          uniqueStrings.add(text);
        }
      }
    }
  });
}

const stringsArray = Array.from(uniqueStrings);
const map = {};
stringsArray.forEach((str) => {
  map[str] = ""; // To be filled
});

fs.writeFileSync("extracted_strings.json", JSON.stringify(map, null, 2));
console.log(`Extracted ${stringsArray.length} unique strings.`);
