import Block from "../../src/components/block";

export interface BlockManagerAPI {
  currentBlockIndex: number;

  readonly firstBlock: Block;
  readonly lastBlock: Block;
  readonly currentBlock: Block;
  readonly nextBlock: Block;

  readonly nextContentfulBlock: Block;
  readonly previousContentfulBlock: Block;

  readonly previousBlock: Block;
  readonly blocks: Block[];

  readonly isEditorEmpty: boolean;
  
  toggleReadOnly(readOnlyEnabled: boolean): void;

  getBlockByIndex(index): Block;
  getBlockIndex(block: Block): number;
  getBlockById(id): Block | undefined;
  getBlock(element: HTMLElement): Block;

  highlightCurrentNode(): void;
  clearFocused(): void;

  setCurrentBlockByChildNode(childNode: Node): Block | undefined;
  getBlockByChildNode(childNode: Node): Block;

  dropPointer(): void;
}