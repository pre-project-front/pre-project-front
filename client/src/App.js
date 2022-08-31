import { Navigate, Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Navigate to="/questions" />} />
        <Route path="/questions" element={<AllQuestionsPage />} />
        <Route path="/questions/:qid" element={<QuestionPage />} />
        <Route path="/questions/ask" element={<AskForm />} />
        <Route path="/posts/:qid/edit" element={<EditForm />} />
        <Route path="/members" element={<AllMembersPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
