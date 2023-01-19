import DefaultLayout from "./layout";

const layouts = {
    default: DefaultLayout,
}

export default function LayoutWrapper(props) {
    console.log(props.children.type.layout)
    return <>{children}</>
}