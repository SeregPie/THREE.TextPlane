import {
	Material,
	Mesh,
} from 'three';

export default class TextPlane extends Mesh {
	constructor(options?: {
		alignment?: string;
		backgroundColor?: string;
		color?: string;
		fontFamily?: string;
		fontSize?: number;
		fontStyle?: string;
		fontVariant?: string;
		fontWeight?: string;
		lineGap?: number;
		padding?: number;
		strokeColor?: string;
		strokeWidth?: number;
		text?: string;
	}, material?: Material);

	readonly isTextPlane: true;

	text: string;

	fontFamily: string;

	fontSize: number;

	fontWeight: string;

	fontVariant: string;

	fontStyle: string;

	color: string;

	strokeWidth: number;

	strokeColor: string;

	alignment: string;

	lineGap: number;

	padding: number;

	backgroundColor: string;

	dispose(): void;
}
