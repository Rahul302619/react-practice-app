import { NameContext } from "./CreateContextExample"

function One() {

    return (
        <div>
            One
            <NameContext.Consumer>
                {
                    name => {
                        return <div>Name: {name}</div>
                    }
                }
            </NameContext.Consumer>
        </div>
    )
}

export default One