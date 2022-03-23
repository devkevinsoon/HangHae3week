import React from "react";

import { useHistory } from "react-router-dom";



const Main = (props) => {

    // 페이지를 이동하기 위해서 history 객체 사용 
    // -> react-router-dom이 제공해주는 useHistroy hook 사용
    // 사용방법 : ex) history.push(/Review);
    const history = useHistory()

    // 요일 Dictionary 객체 만들기
    const dayDict = {
        0: "일",
        1: "월",
        2: "화",
        3: "수",
        4: "목",
        5: "금",
        6: "토",
    };

    // 요일이 한글로 바뀌었는지 확인
    console.log(
        "요일 확인 : ",
        Object.keys(dayDict).map((day, idx) => dayDict[day])
    );

    // 오늘 요일이 제일 위로 보여주기 위한 함수 만들기
    const weekDays = Object.keys(dayDict).map((day, idx) => {
        // 오늘 날짜를 가져오는 함수인 Date에 .geteDay()를 이용하여 오늘 날짜 구함
        let today = new Date().getDay();

        // day parameter => dayDict에 key 값. day : 0~6 
        //  [0, 1, 2, 3, 4, 5, 6] ->[일,월,화,수,목,금,토]
        //  오늘 날짜가 6보다 크면 오늘날짜에 -7을 해주어 일의 자리 숫자를 가져와 해당 key의 값을 찍어주기
        // dictionary key 값에 숫자를 넣었어도 알아서 문자형으로 변경되어 들어감
        // parseInt를 이용하여 day 값을 형변환 시켜줘야 함
        // let day = today + day > 6 ? today + day - 7 : today + day;
        let day_ = today + parseInt(day) > 6 ? today + parseInt(day) - 7 : today + parseInt(day);

        console.log("Dict key : ", day_);
        return dayDict[day_];
    });

    console.log("오늘 요일 확인 : ", weekDays);

    // 요일별로 평점을 담을 배열 생성
    // 평점과 요일 둘 다 가지고 있도록 변경 
    // -> 배열 요소 하나하나를 string이 아니라 dictionary형태로 return 해야함
    // 평점은 랜덤함수를 활용하여 계산함
    const weekGrade = weekDays.map((dt, idx) => {

        const min = Math.ceil(1);
        const max = Math.floor(5);

        return {
            day: dt,
            grade: Math.floor(Math.random() * (max - min + 1)) + min
        };
    });
    console.log("랜덤 평점 : ", weekGrade);

    //화면 만들기
    return (
        <>
            <div
                style={{
                    maxWidth: "340px",
                    width: "80vw",
                    height: "90vh",
                    margin: "5vh auto",
                    padding: "5vh 2vh",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                }}
            >
                <h3 style={{ textAlign: "center" }}>My Weekly?</h3>

                {/* 요일별로 하나씩 (요일 , 평점 도형 5개 , 해당 요일로 이동하는 버튼)*/}
                {weekGrade.map((dt, idx) => {
                    return (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "1rem 0",
                                width: "100%",
                                
                            }}
                        >
                            {/* 요일 텍스트 */}
                            <p style={{ margin: "0 0.5rem 0 0rem", fontWeight: "bold", }}>
                                {dt.day}
                            </p>
                            {/*  모양의 평점 : Array.from() 메서드 사용*/}
                            {Array.from({ length: 5 }, (item, idx) => {
                                /**
                                 * 평점이 1이라면 도형 1개만 핑크, 나머지 배열에 있는 도형은 회색으로 처리  
                                 * 위치 : weekGrade 배열의 map 안쪽이면서 임의로 만든 길이 5개짜리 배열의 map 안쪽
                                 *        평점을 받아놓은 배열의 요소에 접근하여 
                                 *        weekGrade 요소 하나인 dt에 접근 가능 -> dt.grade으로 가지고 올수있음
                                 *        도형이 몇번째 요소인지 접근 가능 : idx로 가지고 올수있음
                                 *        dt.grade < idx ? 회색 : 파란색
                                 * **/
                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "10px",
                                            margin: "5px",
                                            backgroundColor: dt.grade < idx ? "#ddd" : "#ff3399",
                                                                                
                                        }}
                                    >
                                    </div>
                                )
                            })}

                            {/* 요일 별 페이지로 이동할 수 있는 도형버튼 추가 */}
                            <div
                                style={{
                                    backgroundColor: "transparent",
                                    appearance: "none",
                                    borderColor: "#0064FF",
                                    width: "0px",
                                    height: "0px",
                                    borderTop: "1rem solid transparent",
                                    borderBottom: "1rem solid transparent",
                                    borderLeft: "1.6rem solid #0064FF",
                                    cursor: "pointer",
                                }}

                                onClick={() => {
                                    history.push(`/Review/${dt.day}`);
                                }}
                            >
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    );
};

export default Main;
