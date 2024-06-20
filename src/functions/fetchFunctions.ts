export async function getMyLeaderBoardInfo() {
  const res = await fetch('/api/getMyLeaderBoardInfo');
  if (!res.ok) {
    throw new Error("Failed to get my LeaderBoard info profile");
  }
  return res.json();
}

export async function getLeaderBoardData() {
  const res = await fetch('/api/getLeaderBoardData');
  if (!res.ok) {
    throw new Error("Failed to get my LeaderBoard info profile");
  }
  return res.json();
}