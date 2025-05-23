// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LGPL-2.1

// const PUBLIC_IP = "192.168.1.41"; // ADD your ec2-instance public IP
// const PUBLIC_IP = "10.156.19.216"; // ADD your ec2-instance public IP
const PUBLIC_IP = "127.0.0.1";
export const PROCESS_UTTERANCE_URL = "http://" + PUBLIC_IP + ":11000/process_utterance";
export const GET_CDFS_URL = "http://" + PUBLIC_IP + ":11000/get_cdfs";
export const START_GAME_URL = "http://" + PUBLIC_IP + ":11000/start_game";
export const BEGIN_SESSION_URL = "http://" + PUBLIC_IP + ":11000/begin_session";
export const STREAMING_URL = "http://" + PUBLIC_IP + ":81";
// export const STREAMING_URL = "http://" + PUBLIC_IP + ":8080";
