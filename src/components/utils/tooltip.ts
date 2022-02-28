/* eslint-disable jsdoc/no-undefined-types */
/**
 * Use external module CodeX Tooltip
 */
import CodeXTooltips  from 'codex-tooltip';
import TooltipContent from 'codex-tooltip/types/tooltip-content'
import TooltipOptions from 'codex-tooltip/types/tooltip-options'

/**
 * Tooltip
 *
 * Decorates any tooltip module like adapter
 */
export default class Tooltip {
  /**
   * Tooltips lib: CodeX Tooltips
   *
   * @see https://github.com/codex-team/codex.tooltips
   */
  private lib: CodeXTooltips = new CodeXTooltips();

  /**
   * Release the library
   */
  public destroy(): void {
    this.lib.destroy();
  }

  /**
   * Shows tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param {TooltipContent} content - tooltip's content
   * @param {TooltipOptions} options - showing settings
   */
  public show(element: HTMLElement, content: TooltipContent, options?: TooltipOptions): void {
    this.lib.show(element, content, options);
    Tooltip
  }

  /**
   * Hides tooltip
   */
  public hide(): void {
    this.lib.hide();
  }

  /**
   * Binds 'mouseenter' and 'mouseleave' events that shows/hides the Tooltip
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param {TooltipContent} content - tooltip's content
   * @param {TooltipOptions} options - showing settings
   */
  public onHover(element: HTMLElement, content: TooltipContent, options?: TooltipOptions): void {
    this.lib.onHover(element, content, options);
  }
}
