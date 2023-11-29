import '../myProgress/myprogress.css'
 

export const InputProgress = ({handleChange, progress, value}) => {
	return (
		<input
		type="number"
		className="exercise-number"
		placeholder="Введите значение"
		onChange={(e) => handleChange(e,progress._id)}
	 />
	)
}