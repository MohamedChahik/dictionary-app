import { useCallback, useContext, useState } from "react";
import { DictionaryContext } from "../../../config/contexts/dictionary-context";
import { useFetchWrapper } from "../../../config/helpers/fetch-wrapper";
import { DictionaryContextType } from "../../../config/types/dictionary";

export type DictionaryType = {
	licence: Record<string, string>;
	meanings: Array<string>;
	phonetic: string;
	phonetics: Array<string>;
	sourceUrls: Array<string>;
	word: string;
};

export const useDictionaryActions = () => {
	const fetchWrapper = useFetchWrapper();
	const { saveDataDictionary } = useContext(
		DictionaryContext,
	) as DictionaryContextType;
	const [keywordInit, setKeywordInit] = useState<DictionaryType>();

	const searchKeyword = useCallback(async (keyword: string) => {
		try {
			const dataKeywords = await fetchWrapper.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`,
				"",
			);
			setKeywordInit(dataKeywords[0]);
			saveDataDictionary(dataKeywords[0]);
		} catch (e: unknown) {
			console.log("message erreur", e);
		}
	}, []);

	return {
		searchKeyword,
		data: keywordInit || [],
	};
};
