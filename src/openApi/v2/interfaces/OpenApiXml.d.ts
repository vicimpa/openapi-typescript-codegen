/**
 * https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#xmlObject
 */
export interface OpenApiXml {
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
}
