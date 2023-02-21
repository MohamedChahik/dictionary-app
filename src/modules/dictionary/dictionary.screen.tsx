import { useContext } from "react";
import { DictionaryContext } from "../../config/contexts/dictionary-context";
import { DictionaryContextType } from "../../config/types/dictionary";
import "../../styles/global-style.scss";
import { Phonetic } from "./components/Phonetic";
import { Search } from "./components/Search";
import { DataMeaningType } from "./types/data-meaning";

const DictionaryScreen = () => {
	const { dataDictionary } = useContext(
		DictionaryContext,
	) as DictionaryContextType;

	return (
		<>
			<Search />
			<div className="ml-80 mt-6">
				<div className="ml-6">
					<div className="float-left">
						<h1 className="text text-6xl">{dataDictionary?.word}</h1>
						<h5 className="text-xl mt-4 text-purple-500">
							{dataDictionary?.phonetic}
						</h5>
					</div>
				</div>
				<div className="float-right text-6xl mr-80">
					{dataDictionary !== undefined &&
						dataDictionary?.phonetics.map(
							(item: Record<string, string>, index: number) => (
								<div key={index}>
									<Phonetic audio={item.audio} />
								</div>
							),
						)}
				</div>
				<div className="clear-both" />
				{dataDictionary !== undefined &&
					dataDictionary?.meanings.map(
						(item: DataMeaningType, index: number) => (
							<div className="ml-6" key={index}>
								<div className="mt-6 flex flex-row">
									<h1 className="text text-xl">{item.partOfSpeech}</h1>
									<hr className="h-px my-3 ml-2 w-[68%] bg-gray-200 border-0 dark:bg-gray-700" />
								</div>
								<div className="mt-6">
									<h1 className="text-xl text-gray-500">Meaning</h1>
									{item?.definitions !== undefined &&
										item.definitions.map((item: any, index: number) => (
											<ul className="text mt-6 ml-10 max-w-md space-y-1 text-black list-disc list-inside dark:text-black">
												<li key={index}>{item.definition}</li>
											</ul>
										))}
									<div className="flex flex-row mt-10" key={index}>
										<h1 className="text-xl text-gray-500">
											{item?.synonyms !== undefined ? "Synonyms" : ""}
										</h1>
										{item?.synonyms !== undefined &&
											item.synonyms.map((item: string, index: number) => (
												<h1 className="mt-1 ml-6 text-purple-600" key={index}>
													{item}
												</h1>
											))}
									</div>
								</div>
							</div>
						),
					)}
				<div className="ml-6 mt-10">
					{dataDictionary?.sourceUrls !== undefined &&
						dataDictionary?.sourceUrls.map((item: string, index: number) => (
							<div key={index}>
								<hr className="h-px my-3 ml-2 w-[71%] bg-gray-200 border-0 dark:bg-gray-700" />
								<h1 className="text-sm text-gray-500">
									Source
									<a
										className="ml-8 text-sm underline"
										href={item}
										target="_blank"
										rel="noreferrer"
									>
										{item}
									</a>
								</h1>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default DictionaryScreen;
