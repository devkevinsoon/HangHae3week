import React from "react";
import { useHistory, useParams } from "react-router-dom";


const Review = (props) => {
    // 페이지를 이동하기 위해서 history 객체를 사용
    const history = useHistory()

    // parameter를 가져오기 위해 react-router-do의 useParams hook 사용
    // App.js에서 넘겨주는 parameter 
    // -> <Route path="/review/:weekDay" exact = {true} component={Review} />
    const params = useParams();

    // 평점은 state에 넣고 관리
    // 
    // useState는 Array를 반환함
    // [state 데이터, state 데이터 변경 함수] 
    // -> [0] : 첫번째 요소는 데이터를 담을 변수 
    // -> [1] : 두번째 요소는 데이터를 변경할 함수
    const [grade, setGrade] = React.useState(0);

    // useEffect(param1,param2)
    // -> 첫번째 parameter 에는 함수가 들어감
    // -> 두번째 parameter 에는 dependency Array가 들어감
    //  
    React.useEffect(() => {
        
        
        // keydown 이벤트 발생시 실행 함수
        const pressKey = (e) => {
            // keyboard 눌렀을때 발생 한 값 확인
            console.log("KeyPress : ", e);
            let num =  [1 , 2, 3, 4 ,5] ;

            // keyboard 눌렀을때 e.key로 받아온 값이 1~5값이 맞는지 확인 조건 
            if(num.indexOf(parseInt(e.key)) !== -1)
            {
                //console.log("key : ", num.indexOf(parseInt(e.key)));
                // 위 조건이 맞으면 state에 변경된 값 넣기
                setGrade(parseInt(e.key));
            }
            
        };
        // window 객체 사용하여 이벤트리스너 실행
        window.addEventListener("keydown", pressKey);
        
        // 컴포넌트가 unmount 되면(unmount : 화면에서 사라지는 것) event remove.
        return () => window.removeEventListener("keydown", pressKey);

    }, []);

    // 화면 만들기
    return (
        <>
            <div
                style={{
                    maxWidth: "350px",
                    width: "80vw",
                    height: "90vh",
                    margin: "5vh auto",
                    padding: "5vh 5vw",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                }}
            >
                <h3 style={{ textAlign: "center" }}>
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: "750",
                            background: "#F07878",
                            padding: "0.2rem",
                            borderRadius: "5px",
                        }}
                    >
                        {/*요일을 파라미터로 받아올거임*/}
                        {params.weekDay}요일
                    </span>{" "}
                    record
                </h3>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "1rem 0",
                        width: "100%",
                    }}
                >
                    {/* 도형 5개 만들기*/}
                    {Array.from({ length: 5 }, (item, idx) => {
                        return (
                            <div
                                key={idx}
                                onClick={() => {
                                    // 도형을 누르면 색상이 변하면서 평점이 매겨짐
                                    // idx는 0 부터 시작 +1 해주기
                                    // setGrade는 state를 바꿔주는 함수 
                                    setGrade(idx + 1);
                                }}
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "10px",
                                    margin: "5px",
                                    backgroundColor: grade < idx + 1 ? "#ddd" : "#ff3399",

                                }}
                            >
                            </div>
                        );
                    })}
                </div>
                {/* 평점 남겼으면 뒤로가기 버튼 */}
                <button style={{
                    width: "100%",
                    backgroundColor: "#99CCFF",
                    border: "none",
                    padding: "1rem",
                    borderRadius: "5px",
                    color: "#fff",
                }}
                    onClick={() => {
                        //뒤로가기
                        history.goBack();
                    }}
                >
                    record
                </button>
            </div>
        </>
    );
};

export default Review;
