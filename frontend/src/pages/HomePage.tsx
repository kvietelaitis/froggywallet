import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

type Tx = {
    id: string;
    type: "sent" | "received";
    amount: number;
    time: string;
    note?: string;
};

const fmt = (n: number) => n.toFixed(4);

const HomePage: React.FC = () => {
    const [connected, setConnected] = useState(false);
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState<string | null>(null);
    const [txs, setTxs] = useState<Tx[]>([]);

    // small helper to create a mock address
    useEffect(() => {
        if (!address) {
            const mock = `0x${Math.random().toString(16).slice(2, 10)}`;
            setAddress(mock);
        }
    }, [address]);

    const connectWallet = () => {
        setConnected(true);
        // set a mock balance on connect
        setBalance(12.3456);
        setTxs([
            {
                id: `${Date.now()}-1`,
                type: "received",
                amount: 5,
                time: new Date().toISOString(),
                note: "Airdrop",
            },
        ]);
    };

    const disconnect = () => {
        setConnected(false);
        setBalance(0);
        setTxs([]);
    };

    const sendTestTx = (amount = 0.1234) => {
        if (!connected) return;
        const tx: Tx = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            type: "sent",
            amount,
            time: new Date().toISOString(),
            note: "Test payment",
        };
        setTxs((s) => [tx, ...s]);
        setBalance((b) => Math.max(0, b - amount));
    };

    const receiveTestTx = (amount = 0.5) => {
        if (!connected) return;
        const tx: Tx = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            type: "received",
            amount,
            time: new Date().toISOString(),
            note: "Test receive",
        };
        setTxs((s) => [tx, ...s]);
        setBalance((b) => b + amount);
    };

    return (
        <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 24 }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <h1 style={{ margin: 0, fontSize: 20 }}>Froggy Wallet — Test Page</h1>
                <div>
                    {connected ? (
                        <button onClick={disconnect} style={{ padding: "8px 12px" }}>
                            Disconnect
                        </button>
                    ) : (
                        <button onClick={connectWallet} style={{ padding: "8px 12px" }}>
                            Connect (mock)
                        </button>
                    )}
                </div>
            </header>

            <section style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16, alignItems: "start" }}>
                <main style={{ background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                    <h2 style={{ marginTop: 0 }}>Overview</h2>
                    <div style={{ marginBottom: 12 }}>
                        <strong>Address:</strong>{" "}
                        <span style={{ fontFamily: "monospace", color: "#333" }}>{address ?? "—"}</span>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <strong>Balance:</strong>{" "}
                        <span style={{ fontFamily: "monospace", color: "#15803d" }}>{fmt(balance)} FROG</span>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={() => sendTestTx()} disabled={!connected} style={{ padding: "8px 12px" }}>
                            Send 0.1234
                        </button>
                        <button onClick={() => receiveTestTx()} disabled={!connected} style={{ padding: "8px 12px" }}>
                            Receive 0.5
                        </button>
                        <button
                            onClick={() => {
                                setTxs([]);
                            }}
                            disabled={!connected}
                            style={{ padding: "8px 12px" }}
                        >
                            Clear txs
                        </button>
                    </div>
                </main>

                <aside style={{ background: "#fff", padding: 16, borderRadius: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                    <h3 style={{ marginTop: 0 }}>Recent Transactions</h3>
                    {!connected ? (
                        <div style={{ color: "#6b7280" }}>Connect to see transactions</div>
                    ) : txs.length === 0 ? (
                        <div style={{ color: "#6b7280" }}>No transactions yet — try sending a test payment.</div>
                    ) : (
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {txs.map((t) => (
                                <li
                                    key={t.id}
                                    style={{
                                        padding: "8px 0",
                                        borderBottom: "1px solid #f3f4f6",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: 8,
                                        alignItems: "center",
                                    }}
                                >
                                    <div>
                                        <div style={{ fontSize: 13, color: t.type === "received" ? "#065f46" : "#7f1d1d" }}>
                                            {t.type === "received" ? "Received" : "Sent"} {fmt(t.amount)} FROG
                                        </div>
                                        <div style={{ fontSize: 12, color: "#6b7280" }}>{new Date(t.time).toLocaleString()}</div>
                                        {t.note && <div style={{ fontSize: 12, color: "#374151" }}>{t.note}</div>}
                                    </div>
                                    <div style={{ fontFamily: "monospace", fontSize: 12 }}>{t.id.slice(-6)}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                </aside>
            </section>
            <Link to="/expenses" style={{ textDecoration: 'underline', color: 'red' }}>
              <p>Eiti į išlaidų sąrašą</p>
            </Link>
        </div>
    );
};

export default HomePage;