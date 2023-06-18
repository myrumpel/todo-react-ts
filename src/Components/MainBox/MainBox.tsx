import { Content } from './Content/Content'
import { Headline } from './Headline/Headline'
import css from './MainBox.module.scss'

function getDaysOfMonth(year: number): number[] {
	let arr = []
	for (let i = 0; i < 12; i++) {
		arr.push(33 - new Date(year, i, 33).getDate())
	}
	return arr
}
const daysInMonths = getDaysOfMonth(2023)
console.log(daysInMonths)
export const MainBox = () => {
	return (
		<>
			<div className={css.mainBox}>
				<Headline text={'ToDo-Rumpel'} subText={'React-TS'} />

				<Content />
			</div>
		</>
	)
}
