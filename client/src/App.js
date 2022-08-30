import { Route, Routes } from "react-router-dom";
import Header from "components/Header";
import AllMembersPage from "pages/AllUsersPage/AllUsersPage";
import AllQuestionsPage from "pages/AllQuestionsPage/AllQuestionsPage";
import QuestionPage from "pages/AllQuestionsPage/QuestionPage";
import AskForm from "pages/AskForm";
import EditForm from "pages/EditForm";
import Login from "pages/Login";
import Logout from "pages/Logout";
import Signup from "pages/Signup";
import GridSort from "styles/GridSort";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllQuestionsPage />}></Route>
        <Route path="/questions/:qid" element={<QuestionPage />}></Route>
        <Route path="/questions/ask" element={<AskForm />}></Route>
        <Route path="/posts/:qid/edit" element={<EditForm />}></Route>
        <Route path="/members" element={<AllMembersPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </>
  );
}

export default App;
