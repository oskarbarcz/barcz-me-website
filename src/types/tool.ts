/** A tool is a plain name, or a name with details such as versions or services. */
export type Tool = string | {name: string; details: string[]};

export const toolName = (tool: Tool) => typeof tool === "string" ? tool : tool.name;
