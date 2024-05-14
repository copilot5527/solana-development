import {getKeypairFromFile} from "@solana-developers/helpers";
import { Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey, Connection, sendAndConfirmTransaction, clusterApiUrl } from "@solana/web3.js"
const amount = 1;

const connection =await new Connection(clusterApiUrl("devnet"), "confirmed");

const keypair = await getKeypairFromFile("C:\\Users\\admin\\.config\\solana\\id.json");
const recipient = new PublicKey("FpDTjFuojeoAec2LgPfJQ8nGUEqrihL8crXBsTwoqNYK");
const sender= keypair.publicKey;

const transaction = new Transaction();
const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender,
  toPubkey: recipient,
  lamports: LAMPORTS_PER_SOL * amount
})

transaction.add(sendSolInstruction);
console.log(sender, recipient);
const balance =await connection.getBalance(sender);
console.log(balance);

const signature = await sendAndConfirmTransaction(
  connection,
  transaction,
  [keypair]
)

console.log(signature);

