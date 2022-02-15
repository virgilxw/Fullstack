const Button = ({ submit }) => {
    return (
        <div>
            <button type={submit}>add</button>
        </div>)
}

const Input = ({ label, newName, changeFunc }) => {
    return (<div>
        {label}: <input value={newName}
            onChange={(e) => {
                return changeFunc(e.target.value)
            }} />
    </div>)
}

const Form = ({addEntry, newName, setNewName, newNum, setNewNum}) => {
    return(<form onSubmit={addEntry}>
        <Input label="name" value={newName} changeFunc={setNewName} />
        <Input label="number" value={newNum} changeFunc={setNewNum} />
        <Button type="submit"/>
      </form>)
}

export default Form