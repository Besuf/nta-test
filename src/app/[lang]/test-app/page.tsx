import React from 'react';
import useTranslation from 'next-translate/useTranslation'

export default function TestP() {
    const {lang} = useTranslation('common');

    return <div>
        some test page current language is {lang}
    </div>
}