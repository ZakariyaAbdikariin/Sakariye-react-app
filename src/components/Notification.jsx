function Notification({ hasMessage }) {

  return (
  <div>
    <h2>Inbox</h2>
    {hasMessage && <p>You have a new message 📩</p>}
    {hasMessage && <h2>You have new information</h2>}
    </div>
    );
}
export default Notification;