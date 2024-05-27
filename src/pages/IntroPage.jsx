import { useEffect, useState } from 'react';

import MDEditor from '@uiw/react-markdown-editor';

import { Template } from './Template';

import './IntroPage.css';

export const IntroPage = () => {
    const [content, setContent] = useState('');
    useEffect(() => {
        import('../../README.md').then((res) => {
            fetch(res.default)
                .then((response) => response.text())
                .then((text) => setContent(text));
        });
    }, []);

    return (
        <Template>
            <MDEditor.Markdown
                source={content}
                style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.4',
                }}
            />
        </Template>
    );
};
