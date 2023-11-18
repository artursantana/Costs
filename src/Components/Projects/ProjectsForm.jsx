import { Input } from "../Form/Input"


export const ProjectsForm = () => {
  return (
    <form>
        <Input type='text'text='Name project' placeholder='insert name of project' name='name' />

        <Input type='text'text='Name project' placeholder='insert name of project' name='name' />
        <div><input type="number" placeholder="insert your budget" />
        
        </div>
        <div>
            <select name="category_id">
                <option>Select category</option>
            </select>
        </div>
        <div>
            <input type="submit" value='To create Project' />
        </div>
        
    </form>
  )
}
