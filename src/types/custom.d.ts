// Need this in order to import svg as modules

declare module "*.svg" {
    const content: any;
    export default content;
}
