/**
 * Shape of data information for compiler
 * Argument of type '{ size: number; }' is not assignable to parameter of type 'ILabeledValue'.
 * Property 'label' is missing in type '{ size: number; }' but required in type 'ILabeledValue'.
 */
interface ILabeledValue {
  label: string;
  // optional properties
  size?: number;
  // readonly properties
  readonly y: number;
}

// Function interface
interface IPrintLabelFunc {
  (source: object): null;
}

/**
 * using interface
 * @param labeledObj
 */
function printLabel(labeledObj: ILabeledValue) {
  console.log(`from function using interface`);
  console.log(JSON.stringify(labeledObj, null, 4));
}

/**
 * without interface
 * @param labeledObj
 */
function printLabel1(labeledObj: { label: string }) {
  console.log(`from function NOT using interface`);
  console.log(JSON.stringify(labeledObj, null, 4));
}

let myObj = {
  size: 10,
  label: "Size 10 Object",
  y: 5
};

// MAIN
printLabel(myObj);
printLabel1(myObj);