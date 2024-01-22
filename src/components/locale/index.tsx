import React, { Suspense, useEffect, useState } from 'react';

interface LocaleProps {
    /** 로케일 키 */
    k: string;
    /** 언어(ko, en) */
    lang?: string;
    /** 인자 */
    parameters?: string | number;
}

/** 문구들을 캐싱한 변수입니다. */
let cachedLocaleValues: { [key: string]: string } | null = null;

/** 현재 설정된 언어에 해당하는 문구를 모두 가지고옵니다. */
const loadAllLocaleValues = async (): Promise<{ [key: string]: string }> => {
    const localeComponentModule = await import("../../libs/locale/locale_ko.json");
    return localeComponentModule.default;
};

/** 문구를 전역변수에 저장합니다. */
export const loadLocaleValue = async (key: string): Promise<string> => {
    if (!cachedLocaleValues) {
        cachedLocaleValues = await loadAllLocaleValues();
    }

    return cachedLocaleValues[key] || '';
};


/** 번역파일에 있는 key값에 해당하는 문구를 element로 변환합니다. */
const Locale = (props: LocaleProps): JSX.Element => {
    const [text, setText] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await loadLocaleValue(props.k);
            setText(result);
        };

        fetchData();
    }, [props]);

    return (
        <Suspense fallback={<div></div>}>
            <div>{text}</div>
        </Suspense>
    );
};

/** Locale element를 string으로 변환합니다. */
export const getLocaleToString = (value: string, param: string | number = ""): string => {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        const data = {
            k: value,
            lang: "ko",
            parameters: param,
        };
        const fetchData = async () => {
            const result = await loadLocaleValue(value);
            setText(result);
        };

        fetchData();
    }, [value]);

    return text;
};


export default Locale;