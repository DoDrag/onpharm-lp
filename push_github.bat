@echo off
REM ============================================================
REM  OnPharm LP - GitHub Pages 첫 푸시 스크립트
REM  사용법: github.com/new 에서 onpharm-lp Public 레포 만든 뒤 더블클릭
REM ============================================================
chcp 65001 >nul
cd /d "%~dp0"
setlocal enabledelayedexpansion

echo.
echo ============================================================
echo  OnPharm LP - GitHub 푸시
echo ============================================================
echo.

REM 1. 레포 URL 확인
git remote -v >nul 2>&1
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo  [필수] GitHub 레포 URL 을 입력해주세요.
    echo  예: https://github.com/DoDrag/onpharm-lp.git
    echo.
    set /p REPO_URL="레포 URL: "
    git remote add origin "!REPO_URL!"
    echo.
    echo  [OK] 원격 저장소 등록: !REPO_URL!
)

REM 2. 모든 변경사항 스테이징
echo  [1/3] 변경사항 스테이징...
git add .

REM 3. 커밋 (변경사항이 있을 때만)
git diff --cached --quiet
if errorlevel 1 (
    echo  [2/3] 커밋 생성...
    git commit -m "feat: OnPharm LP 초기 배포"
) else (
    echo  [SKIP] 커밋할 변경사항 없음
)

REM 4. 푸시
echo  [3/3] GitHub 푸시...
git push -u origin main
if errorlevel 1 (
    echo.
    echo  [재시도] pull --rebase 후 다시 푸시...
    git pull --rebase origin main
    git push -u origin main
)

echo.
echo ============================================================
echo  [완료] 푸시 성공!
echo ============================================================
echo.
echo  다음 단계:
echo  1) github.com - 본 레포 - Settings - Pages
echo  2) Source: Deploy from a branch
echo  3) Branch: main /  ^(root^)  - Save
echo  4) 1~2분 뒤 https://DoDrag.github.io/^<레포명^>/ 에서 라이브 확인
echo.
pause
