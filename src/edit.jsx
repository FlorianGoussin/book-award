import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { TextControl, TextareaControl } from '@wordpress/components';

export default function Edit(props) {
	const {
		attributes: { bookAwardTitle, bookAwardContent },
		setAttributes,
	} = props;

	const handleTitleChange = (value) => {
		setAttributes({ bookAwardTitle: value });
	};
	const handleContentChange = (value) => {
		setAttributes({ bookAwardContent: value });
	};

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<TextControl
				label={__('Book Award Title', 'fgc-blocks')}
				value={bookAwardTitle}
				onChange={handleTitleChange}
			/>
			<TextareaControl
				label={__('Book Award', 'fgc-blocks')}
				value={bookAwardContent}
				onChange={handleContentChange}
			/>
		</div>
	);
}
