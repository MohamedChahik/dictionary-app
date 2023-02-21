import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	audio: string;
};

export const Phonetic: React.FC<Props> = ({ audio }) => {
	let getAudio = new Audio(audio);

	function start() {
		getAudio.play();
	}

	return (
		<div className="mr-10">
			{audio && (
				<FontAwesomeIcon
					icon={faPlayCircle}
					className="hover:bg-purple-300  text-purple-500 text-6xl rounded-full mb-2"
					onClick={start}
				/>
			)}
		</div>
	);
};
