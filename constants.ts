export type PageInfo = {url : string}
export type Pages = {
    [page: string]: PageInfo
}

export const NAV_PAGES: Pages  = {
    "Jacob McKenney": {
        url: "/"
    },
    "Education": {
        url: "/education"
    },
    "Projects": {
        url: "/projects"
    },
    "Experience": {
        url: "/experience"
    },
}