import { AddressContext, NameContext } from "./CreateContextExample"

function Three() {

    return (
        <div>
            Three
            <NameContext.Consumer>
                {
                    name => {
                        return <div>Name: {name}</div>
                    }
                }
            </NameContext.Consumer>

            <AddressContext.Consumer>
                {
                    address => {
                        return <div>Address: {address}</div>
                    }
                }
            </AddressContext.Consumer>
        </div>
    )
}

export default Three