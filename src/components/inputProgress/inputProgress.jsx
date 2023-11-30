import '../myProgress/myprogress.css'
 

export const InputProgress = ({handleChange, progress, value}) => {
	return (
		<input
		type="number"
		className="exercise-number"
		placeholder="Введите значение"
		max={progress.max}
		min='0'
		onChange={(e) => handleChange(e,progress._id)}
	 />
	)
}