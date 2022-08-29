import Header from "components/Header";
import AllMembersPage from "pages/AllUsersPage/AllUsersPage";
import AllQuestionsPage from "pages/AllQuestionsPage/AllQuestionsPage";
import QuestionPage from "pages/AllQuestionsPage/QuestionPage";
import AskForm from "pages/AskForm";
import Login from "pages/Login";
import Logout from "pages/Logout";
import Signup from "pages/Signup";
import { Route, Routes } from "react-router-dom";
import EditForm from "pages/EditForm";
import GridTest from "styles/GridTest";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllQuestionsPage />}></Route>
        <Route path="/questions/:id" element={<QuestionPage />}></Route>
        <Route path="/questions/ask" element={<AskForm />}></Route>
        <Route path="/posts/:id/edit" element={<EditForm />}></Route>
        <Route path="/members" element={<AllMembersPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </>
  );
}

export default App;
