// JavaScript source code
import "./KPSir.css";

function KPSir() {
    return (
        <div className="page" id="kp-sir-profile">

            {/* TOP BADGE */}
            <div className="top-badge">Educator Profile &nbsp;·&nbsp; National Level</div>

            {/* HERO */}
            <div className="hero">
                <div className="hero-text">
                    <div className="name-block">
                        <span className="name-main">Krishna Prakash</span>
                        <span className="name-sub">KP Sir &nbsp;·&nbsp; GATE Guru &nbsp;·&nbsp; Mr. GATE</span>
                    
                    </div>
                    <p className="tagline">
                        India's most decorated GATE &amp; ESE educator. Architect of AIR 1 ranks, mentor to over 2 lakh engineers, and the nation's only specialist for GATE EVS. A name synonymous with results.
                    </p>
                </div>

                <div className="stats-panel">
                    <div className="stat-box">
                        <span className="stat-num">22+</span>
                        <span className="stat-label">Years Active</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">270</span>
                        <span className="stat-label">Batches Taught</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-num">2L+</span>
                        <span className="stat-label">Students Mentored</span>
                    </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="gold-divider"><div className="divider-diamond"></div></div>

            {/* GRID PANELS */}
            <div className="section-grid" style={{ animation: "fadeSlideUp 0.8s ease 0.4s both" }}>

                {/* AIR RANKS */}
                <div className="section-panel">
                    <div className="section-label">Rank Results</div>
                    <div className="rank-row">
                        <div className="rank-card">
                            <span className="rank-badge">AIR 1</span>
                            <span className="rank-exam">GATE</span>
                            <span className="rank-desc">Produced</span>
                        </div>
                        <div className="rank-card">
                            <span className="rank-badge">AIR 1</span>
                            <span className="rank-exam">ESE / IES</span>
                            <span className="rank-desc">Produced</span>
                        </div>
                    </div>
                    <p style={{ fontSize:"12px", color:"var(--muted)", marginTop:"14px", lineHeight:"1.6" }}>
                        Consistently produced multiple Top 10 ranks in both GATE and ESE over the years.
                    </p>
                </div>

                {/* PREV ASSOCIATIONS */}
                <div className="section-panel">
                    <div className="section-label">Previous Associations</div>
                    <div className="prev-row">
                        <div className="prev-card">
                            <span className="prev-org">ACE Academy</span>
                            <span className="prev-type">Premier GATE Institute</span>
                        </div>
                        <div className="prev-card">
                            <span className="prev-org">Unacademy</span>
                            <span className="prev-type">Ed-Tech Platform</span>
                        </div>
                    </div>
                    <p style={{ fontSize:"12px", color:"var(--muted)", marginTop:"14px", lineHeight:"1.6" }}>
                        Shaped pedagogy at India's leading offline and online competitive exam platforms.
                    </p>
                </div>

                {/* AWARDS */}
                <div className="section-panel">
                    <div className="section-label">Awards &amp; Recognition</div>
                    <div className="awards-grid">
                        <div className="award-item">
                            <span className="award-icon">🏆</span>
                            <span className="award-name">Best Teacher Awardee</span>
                        </div>
                        <div className="award-item">
                            <span className="award-icon">🌏</span>
                            <span className="award-name">Asian Education ICON Awardee</span>
                        </div>
                        <div className="award-item">
                            <span className="award-icon">🎖️</span>
                            <span className="award-name">Rajeev Gandhi ICON Awardee</span>
                        </div>
                        <div className="award-item">
                            <span className="award-icon">⭐</span>
                            <span className="award-name">Telangana Elite Educator Awardee</span>
                        </div>
                    </div>
                </div>

                {/* EXCLUSIVE DISTINCTION */}
                <div className="section-panel">
                    <div className="section-label">National Distinction</div>
                    <div className="exclusive-block" style={{ marginBottom:"16px" }}>
                        <span className="exclusive-star">🇮🇳</span>
                        <div className="exclusive-text">
                            <strong>Only Educator in India for GATE EVS</strong>
                            <span>An unmatched niche expertise held exclusively by KP Sir — no other educator in India specialises in GATE Environmental Science (EVS).</span>
                        </div>
                    </div>
                    <div className="award-item" style={{ borderColor:"rgba(201,168,76,0.3)" }}>
                        <span className="award-icon">📰</span>
                        <span className="award-name" style={{ fontSize: "13px", color: "var(--off-white)" }}>Featured in <strong style={{ color:"var(--gold-light)" }}>Brandz Magazine</strong> — National Media Recognition</span>
                    </div>
                </div>

                {/* MENTOR PROFILES */}
                <div className="section-panel full-width">
                    <div className="section-label">Mentored Profiles</div>
                    <div className="mentor-tags">
                        <span className="mentor-tag">IES / ESE Officers</span>
                        <span className="mentor-tag">PSU Engineers</span>
                        <span className="mentor-tag">IITians</span>
                        <span className="mentor-tag">AEE (Asst. Executive Engineers)</span>
                        <span className="mentor-tag">AE (Asst. Engineers)</span>
                        <span className="mentor-tag">Junior Engineers (JE)</span>
                        <span className="mentor-tag">Scientists</span>
                        <span className="mentor-tag">Entrepreneurs</span>
                    </div>
                    <p style={{ fontSize:"13px", color:"var(--muted)", marginTop:"16px", lineHeight:"1.7" }}>
                        From fresh graduates to serving officers — KP Sir's mentorship spans the full spectrum of engineering career trajectories, making his impact both wide and deep.
                    </p>
                </div>

                {/*SPECIALISATION */}
                <div className="section-panel">
                    <div className="section-label">Specialisation Areas</div>
                    <ul className="achievement-list">
                        <li><span className="gold-dot"></span>GATE — All Engineering Streams</li>
                        <li><span className="gold-dot"></span>ESE / IES — Engineering Services Exam</li>
                        <li><span className="gold-dot"></span>GATE EVS — Environmental Science (Exclusive)</li>
                        <li><span className="gold-dot"></span>PSU Recruitment Exams</li>
                        <li><span className="gold-dot"></span>State AEE / AE / JE Level Exams</li>
                    </ul>
                </div>

                {/* TEACHING SCALE */}
                <div className="section-panel">
                    <div className="section-label">Teaching Scale</div>
                    <ul className="achievement-list">
                        <li><span className="gold-dot"></span>270 Batches Taught — GATE &amp; ESE</li>
                        <li><span className="gold-dot"></span>2,00,000+ Students Mentored</li>
                        <li><span className="gold-dot"></span>22 Continuous Years of Active Teaching</li>
                        <li><span className="gold-dot"></span>Offline &amp; Online Pedagogy Experience</li>
                        <li><span className="gold-dot"></span>National-level classroom &amp; digital reach</li>
                    </ul>
                </div>

            </div>

            {/* FOOTER STATS STRIP */}
            <div className="footer-strip">
                <div className="footer-stat">
                    <span className="footer-num">22+</span>
                    <span className="footer-label">Years of Experience</span>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-stat">
                    <span className="footer-num">270</span>
                    <span className="footer-label">Batches Taught</span>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-stat">
                    <span className="footer-num">2L+</span>
                    <span className="footer-label">Students Mentored</span>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-stat">
                    <span className="footer-num">AIR 1</span>
                    <span className="footer-label">GATE &amp; ESE Produced</span>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-stat">
                    <span className="footer-num">4+</span>
                    <span className="footer-label">National Awards</span>
                </div>
            </div>

        </div> 
    );
}

export default KPSir;