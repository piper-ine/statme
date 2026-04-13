import { Key } from "react"
import { UrlObject } from "url"

interface SidebarLinksType{
    key: Key
    text: String,
    path: UrlObject,
    action?: Boolean
}

const sidebarLinks: SidebarLinksType[] = [
    {
        key: 1,
        text: "Dashboard",
        path: {
            pathname: "/"
        },
        action: false
    },
    {
        key: 2,
        text: "Health",
        path: {
            pathname: "/health"
        },
        action: false
    },
    {
        key: 3,
        text: "Charts",
        path: {
            pathname: "/charts"
        },
        action: false
    },
    {
        key: 4,
        text: "Archive",
        path: {
            pathname:"/archive"
        },
        action: false
    },
    {
        key: 5,
        text: "Guide",
        path: {
            pathname: "/guide"
        },
        action: false
    },
]

export {sidebarLinks}