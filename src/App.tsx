import { FormEvent, useState } from 'react';
import { ArrowLeft, LockKeyhole, MapPin, UserRound } from 'lucide-react';

function App() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!id.trim() || !password.trim()) {
      setMessage('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    setMessage('로그인 정보를 확인하고 있습니다.');
  };

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <a className="back-link" href="#" aria-label="홈으로 돌아가기">
          <ArrowLeft size={18} strokeWidth={2.5} />
          홈으로
        </a>

        <div className="brand-mark" aria-hidden="true">
          <MapPin size={34} strokeWidth={2.8} />
        </div>
        <p className="brand-name">Localink</p>
        <p className="eyebrow">지역의 가게와 여행자를 연결하는</p>
        <h1 id="login-title">다시 만나서 반가워요</h1>
        <p className="intro">로그인하고 나만의 지역 경험을 시작해보세요.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="user-id">아이디</label>
          <div className="input-wrap">
            <UserRound size={19} aria-hidden="true" />
            <input
              id="user-id"
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
              placeholder="아이디를 입력해주세요"
              autoComplete="username"
            />
          </div>

          <label htmlFor="password">비밀번호</label>
          <div className="input-wrap">
            <LockKeyhole size={19} aria-hidden="true" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="비밀번호를 입력해주세요"
              autoComplete="current-password"
            />
          </div>

          <button type="submit">로그인</button>
          <p className="form-message" role="status">{message}</p>
        </form>

        <div className="social-login">
          <p className="social-divider"><span>또는 간편 로그인</span></p>
          <div className="social-buttons">
            <button type="button" className="social-btn social-btn--google" aria-label="Google 계정으로 로그인">
              <img src="/icons/google.svg" alt="" width={22} height={22} aria-hidden="true" />
            </button>
            <button type="button" className="social-btn social-btn--kakao" aria-label="카카오 계정으로 로그인">
              <img src="/icons/kakao.svg" alt="" width={24} height={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="signup-prompt">
          아직 회원이 아니신가요? <a href="#">회원가입</a>
        </p>
      </section>
    </main>
  );
}

export default App;
