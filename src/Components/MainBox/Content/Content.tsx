import { GrDocument } from 'react-icons/gr'
import css from './Content.module.scss'
export const Content = () => {
	return (
		<>
			<div>
				<ul className={css.contentBox}>
					<li className={css.contentItem}>
						<h5 className={css.contentItemTitle}>Утром</h5>
						<ul className={css.itemsList}>
							<li className={css.todo}>
								<h6>
									<GrDocument className={css.docIcon} />
									Название
								</h6>
								<p>дело 1</p>
							</li>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 2
							</li>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 3
							</li>
						</ul>
					</li>
					<li className={css.contentItem}>
						<h5 className={css.contentItemTitle}>Днём</h5>
						<ul className={css.itemsList}>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 1
							</li>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 2
							</li>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 3
							</li>
						</ul>
					</li>
					<li className={css.contentItem}>
						<h5 className={css.contentItemTitle}>Вечером</h5>
						<ul className={css.itemsList}>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 1
							</li>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 2
							</li>
							<li className={css.todo}>
								<GrDocument className={css.docIcon} />
								дело 3
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	)
}
