import css from './Headline.module.scss'
interface IProps {
	text: string
	subText: string
}
export const Headline = (props: IProps) => {
	return (
		<>
			<h1 className={css.title}>{props.text}</h1>
			<h2 className={css.subTitle}>{props.subText}</h2>
		</>
	)
}

// export default Headline
