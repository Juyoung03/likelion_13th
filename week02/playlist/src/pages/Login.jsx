import Input from "../components/Input";
import Button from "../components/Button";

export const Login = () => {

  return (
    <>
      <div className="p-6 space-y-4 max-w-md mx-auto">
      <label className="block text-gray-700 dark:text-gray-200 mb-1">
        이메일 주소
      </label>
      <Input placeholder="example@email.com" />

      <label className="block text-gray-700 dark:text-gray-200 mb-1">
        비밀번호
      </label>
      <Input type="password" placeholder="••••••••" />
      <Button variant="primary">저장</Button>
    </div>
    </>
  );
};