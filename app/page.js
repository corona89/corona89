"use client";

import Image from "next/image";
import Script from "next/script";
import ResultItem from "./components/ResultItem";
import { useEffect, useState, useRef} from "react";

export default function Home() {
  const auths = [
    {"auth" : "Bearer app-3vNaoN0iddChSRYy6gX2zzug", "name" : "claue 3.7"},
    {"auth" : "Bearer app-M7LtOpMBBUxZi9JCxB4tshY3", "name" : "gpt 4.1"},
  ]
  const [ items, setItems] = useState([
    {
      url: "https://davinci-ai.tistory.com/15",
      title: "머신러닝 (3) - 데이터 전처리 - DAVINCI - AI",
      description:
          "2020.1.22. 데이터 전처리는 기존의 데이터를 머신러닝 알고리즘에 알맞은 데이터로 바꾸는 과정입니다. 이 전처리 과정은 모델이 생선 된 이후에도 예측하고자 하는 ...",
    },
    {
      url: "https://www.purestorage.com/kr/knowledge/what-is-data-preprocessing.html",
      title: "머신러닝을 위한 데이터 전처리란? | 퓨어스토리지",
      description:
          "머신러닝(ML)을 위한 데이터 전처리는 원시 데이터를 준비하고 ML 모델 트레이닝에 적합한 형식으로 변환하는 것을 의미합니다. 이는 모델의 성능과 정확성에 직접적인 ...",
    },
    {
      url: "https://velog.io/@jochedda/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D-%EC%99%84%EB%B2%BD%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EC%B2%98%EB%A6%AC",
      title: "파이썬 머신러닝 완벽가이드 -데이터 전처리",
      description:
          "2022.8.19. 데이터 전처리(Data Preprocessing)는 ML 알고리즘 만큼 중요하다 어떠한 데이터에 기반하고 있느냐에 따라 결과도 크게 달라지기 때문이다.",
    },
    {
      url: "https://bcho.tistory.com/1380",
      title: "머신러닝 파이프라인에서 데이터 전처리 방법 - 조대협의 블로그",
      description:
          "2021.1.13. 머신러닝에서 데이터 전처리는 모델 학습에 사용되는 데이터 형태로 데이터를 가공하는 과정을 이야기한다. 데이터 전처리는 여러 단계로 이루어지는데, ...",
    },
  ])
  const [conversationId, setConversationId] = useState("");
  const [currentType, setCurrentType] = useState(0);

  // 아이템 추가
  const handleAdd = (url, title, description) => {
    const newItem = {
      url: url,
      title: title,
      description: description,
    };
    setItems([...items, newItem]);
  };
  
  // 리셋
  const resetItems = () => {
    setConversationId("")
    setItems([
      {
        url: "https://davinci-ai.tistory.com/15",
        title: "머신러닝 (3) - 데이터 전처리 - DAVINCI - AI",
        description:
            "2020.1.22. 데이터 전처리는 기존의 데이터를 머신러닝 알고리즘에 알맞은 데이터로 바꾸는 과정입니다. 이 전처리 과정은 모델이 생선 된 이후에도 예측하고자 하는 ...",
      },
      {
        url: "https://www.purestorage.com/kr/knowledge/what-is-data-preprocessing.html",
        title: "머신러닝을 위한 데이터 전처리란? | 퓨어스토리지",
        description:
            "머신러닝(ML)을 위한 데이터 전처리는 원시 데이터를 준비하고 ML 모델 트레이닝에 적합한 형식으로 변환하는 것을 의미합니다. 이는 모델의 성능과 정확성에 직접적인 ...",
      },
      {
        url: "https://velog.io/@jochedda/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D-%EC%99%84%EB%B2%BD%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EC%B2%98%EB%A6%AC",
        title: "파이썬 머신러닝 완벽가이드 -데이터 전처리",
        description:
            "2022.8.19. 데이터 전처리(Data Preprocessing)는 ML 알고리즘 만큼 중요하다 어떠한 데이터에 기반하고 있느냐에 따라 결과도 크게 달라지기 때문이다.",
      },
      {
        url: "https://bcho.tistory.com/1380",
        title: "머신러닝 파이프라인에서 데이터 전처리 방법 - 조대협의 블로그",
        description:
            "2021.1.13. 머신러닝에서 데이터 전처리는 모델 학습에 사용되는 데이터 형태로 데이터를 가공하는 과정을 이야기한다. 데이터 전처리는 여러 단계로 이루어지는데, ...",
      },
    ])
  }

  function generateRandomUrl() {
    const domains = ["abc.dev", "nomad.tistory.com", "stackoverflow.com", "google.com", "yahoo.com", "msn.com", "duckduck.org", "velog.io", "davinci-ai.tistory.com", "code.io", "github.com", "purestorage.com", "infinity.com", "tailwind.com", "ai-news.com", "airflow.org"];
    const paths = ["home", "about", "contact", "search", "blog", "post", "dashboard"];
    const params = ["id", "ref", "token", "q"];

    const domain = domains[Math.floor(Math.random() * domains.length)];
    const path = paths[Math.floor(Math.random() * paths.length)];
    const param = params[Math.floor(Math.random() * params.length)];
    const value = Math.random().toString(36).substring(2, 10); // 랜덤 문자열

    return `https://${domain}/${path}?${param}=${value}`;
  }

  const queryRef = useRef();
  const fetchMessage = (type= 0,query) => {
    let conversation_id = conversationId
    
    if (currentType !== type) {
      setConversationId("")
      setCurrentType(type)
      conversation_id = ""
    }
    
    fetch("https://api.abclab.ktds.com/v1/chat-messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${auths[type].auth}`,
          },
          body: JSON.stringify({
            query: `${query}`,
            conversation_id: `${conversation_id}`,
            response_mode: "streaming",
            user: "test9999",
            inputs: {},
          }),
        },)
        .then(async (res) => {
          const reader = res.body.getReader();
          const decoder = new TextDecoder("utf-8");

          let answer = ""
          let thought = ""
          let buffer = ""

          while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            buffer += chunk;

            // 여러 줄이 올 수 있으므로 \n으로 나눠 처리
            const lines = buffer.split("\n");
            buffer = lines.pop(); // 마지막 줄은 아직 완성되지 않았을 수 있음

            for (const line of lines) {
              const cleanLine = line.replace(/^data:\s*/, "").trim();
              if (!cleanLine) continue;

              try {
                const item = JSON.parse(cleanLine);
                if (item.answer) {
                  answer += item.answer;
                }
                if (item.thought) {
                  thought = item.thought;
                }
                if (item.event === "message_end") {
                  setConversationId(item.conversation_id);
                  const str = thought || answer;
                  handleAdd(generateRandomUrl(), str.match(/.*?[.](?=\s|$)/)?.[0] || str, str);
                }
              } catch (e) {
                // JSON.parse 실패 (불완전한 JSON 등) → 무시
              }
            }
          }
        });
  }
  // useEffect(() => {
  //   fetchMessage()
  // })

  return (
      <main className="min-h-screen flex flex-col items-center justify-start bg-white relative">
        <div className="logo">
          <Image
              src="https://www.google.co.kr/logos/doodles/2024/paris-games-conclude-6753651837110568-law.gif"
              alt="Google Logo"
              width={272}
              height={92}
              priority
          />
        </div>

        <div className="search-container pb-7">
          <div className="search-box">
            <input
                ref={queryRef}
                type="text"
                placeholder="Google 검색 또는 URL 입력"
                className="flex-1 border-none outline-none text-base"
            />
          </div>

          <div className="buttons">
            <button className="btn" onClick={() => fetchMessage(0, queryRef.current.value)}>Google 검색</button>
            <button className="btn" onClick={() => fetchMessage(1, queryRef.current.value)}>I&apos;m Feeling Luck</button>
            <button className="btn" onClick={resetItems}>더보기</button>
          </div>

          <div className="results w-3/5 my-5">
            {items.map((item, index) => (
                <ResultItem
                    key={item.id ?? index}
                    href={item.url}
                    title={item.title}
                    url={item.url}
                    description={item.description}
                />
            ))}
          </div>
        </div>

        <div className="footer w-full bg-[#f2f2f2] text-center py-5 box-border absolute bottom-0">
          <a
              href="#"
              className="text-[#5f6368] no-underline text-sm mx-4 hover:underline"
          >
            광고
          </a>
          <a
              href="#"
              className="text-[#5f6368] no-underline text-sm mx-4 hover:underline"
          >
            비즈니스
          </a>
          <a
              href="#"
              className="text-[#5f6368] no-underline text-sm mx-4 hover:underline"
          >
            검색의 원리
          </a>
          <a
              href="#"
              className="text-[#5f6368] no-underline text-sm mx-4 hover:underline"
          >
            개인정보처리방침
          </a>
          <a
              href="#"
              className="text-[#5f6368] no-underline text-sm mx-4 hover:underline"
          >
            약관
          </a>
          <a
              href="#"
              className="text-[#5f6368] no-underline text-sm mx-4 hover:underline"
          >
            설정
          </a>
        </div>
      </main>
  );
}
