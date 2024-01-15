import React, { Suspense, useEffect, useState } from 'react';

interface LocaleProps {
    /** 로케일 키 */
    k: string;
    /** 언어(ko, en) */
    lang?: string;
    /** 인자 */
    parameters?: any;
}

const loadLocaleValue = (props: LocaleProps): Promise<string> => {
    return new Promise<string>(async (resolve, reject) => {
        const localeComponentModule = await import("../../libs/locale/locale_ko.json");
        // 비동기적으로 로딩된 모듈을 반환
        const LocaleComponent = localeComponentModule.default;
        let text = "";
        for (let key in LocaleComponent) {
            if (props.k !== key) continue;
            text = LocaleComponent[key];
        }

        resolve(text);
    })
};

const Locale = (props: LocaleProps): JSX.Element => {
    const [text, setText] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await loadLocaleValue(props);
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
export default Locale;