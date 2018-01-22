import React from "react"

class Form extends React.Component {
    render(){
        return (
            <form>
                <input type="text" name="city" placeholder="Cidade..." />
                <input type="text" name="country" placeholder="Pais..." />
                <button>Confira a previsão</button>
            </form>
        )
    }
}

export default Form