export type PageInfo = {url : string, scroll: () => void}
export type Pages = {
    [page: string]: PageInfo
}