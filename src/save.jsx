import { useBlockProps } from '@wordpress/block-editor';
import laurelLeftImage from './images/laurel-left.svg';
import laurelRightImage from './images/laurel-right.svg';

export default function save(props) {
	const {
		attributes: { bookAwardTitle, bookAwardContent },
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div class="book-award_content">
				<div class="book-award_laurels">
					<img src={laurelLeftImage} alt="Award laurel left" />
					<img src={laurelRightImage} alt="Award laurel right" />
				</div>

				<div class="book-award_text">
					<div>{bookAwardTitle}</div>
					<div>{bookAwardContent}</div>
				</div>
			</div>
		</div>
	);
}
