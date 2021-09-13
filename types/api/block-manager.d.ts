import { BlockAPI } from ".";
import Block from "../../src/components/block";

export interface BlockManagerAPI {
  currentBlockIndex: number;

  readonly firstBlock: BlockAPI;
  readonly lastBlock: BlockAPI;
  readonly currentBlock: BlockAPI;
  readonly nextBlock: BlockAPI;

  readonly nextContentfulBlock: BlockAPI;
  readonly previousContentfulBlock: BlockAPI;

  readonly previousBlock: BlockAPI;
  readonly blocks: BlockAPI[];

  readonly isEditorEmpty: boolean;
  
  toggleReadOnly(readOnlyEnabled: boolean): void;

  getBlockByIndex: (index) => BlockAPI;
  getBlockIndex: (block: BlockAPI) => number;
  getBlockById: (id) => BlockAPI | undefined;
  getBlock: (element: HTMLElement) => BlockAPI;

  highlightCurrentNode: () => void;
  clearFocused: () => void;

  setCurrentBlockByChildNode: (childNode: Node) => BlockAPI | undefined;
  getBlockByChildNode: (childNode: Node) => BlockAPI;

  dropPointer: () => void;
}