import { useParams } from 'react-router-dom';

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ChatBlock from "../../components/ui/chat/ChatBlock";
import QuestionBox from "../../components/ui/question/QuestionBox";
import CollabEditor from "../../components/ui/collaboration/CollabEditor";
import styles from "./Room.module.css";

function RoomPage() {
  // Todo: Use room id prop/state instead in the future
  const { roomId } = useParams();

  return (
    <div>
      <Grid container>
        <Grid xs={2} item></Grid>
        <Grid xs={8} item>
          <Typography
            variant="h4"
            fontWeight="lighter"
            textAlign="center"
            sx={{ mb: "40px" }}
          >
            Your technical interview begins...
          </Typography>
        </Grid>
        <Grid xs={2} item justifyContent="flex-end">
          <div className={styles.leave_session_button}>
            <Button variant="outlined" color="error">
              <b>Leave Session</b>
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {/* Question component */}
        <Grid xs={5} item>
          <QuestionBox />
        </Grid>
        <Grid xs={7} item container direction="column">
          {/* Chat component */}
          <Grid item>
            <ChatBlock />
          </Grid>
          {/* Code Editor component */}
          <Grid item>
            <div className={styles.code_editor}>
              <CollabEditor roomId={roomId} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default RoomPage;
