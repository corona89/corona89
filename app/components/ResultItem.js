import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * 검색 결과 아이템 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.title - 결과 제목
 * @param {string} props.url - 결과 URL
 * @param {string} props.description - 결과 설명
 * @returns {JSX.Element} 검색 결과 아이템 UI
 */
const ResultItem = ({ title, url, description }) => {
    const [clicked, setClicked] = useState(false);
    
    return (
        <div className="result-item my-5">
            <div>
                <a
                    href={url}
                    className="text-lg text-[#1a0dab] no-underline hover:underline"
                    onClick={(e) => {
                        e.preventDefault()
                        setClicked(!clicked)
                    }
                    }
                >
                    {title}
                </a>
                <div className="url text-sm text-[#006621]">
                    {url}
                </div>
                <div className="markdown-body">
                    {clicked && <div className="description text-sm text-[#545454]">
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </div>}
                    {!clicked && <div className="description text-sm text-[#545454] overflow-hidden line-clamp-3">{description}</div>}
                </div>
            </div>
        </div>
    );
};

export default ResultItem;