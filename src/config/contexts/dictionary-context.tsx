import * as React from "react";
import { DictionaryType } from "../../modules/dictionary/hook/useDictionaryActions";
import { DictionaryContextType } from "../types/dictionary";

export const DictionaryContext =
	React.createContext<DictionaryContextType | null>(null);

const DictionaryProvider: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [dataDictionary, setDataDictionary] = React.useState<DictionaryType>();

	const saveDataDictionary = (data: DictionaryType) => {
		setDataDictionary(data);
	};

	return (
		<DictionaryContext.Provider value={{ dataDictionary, saveDataDictionary }}>
			{children}
		</DictionaryContext.Provider>
	);
};

export default DictionaryProvider;
